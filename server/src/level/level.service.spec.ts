import { Test, TestingModule } from "@nestjs/testing";
import { LevelService } from "./level.service";
import { PrismaService } from "src/prisma/prisma.service";
import { Level } from "@prisma/client";
import { ForbiddenException } from "@nestjs/common";

const dateMock: Date = new Date();

const levelArray: Level[] = [
  {
    id: 1,
    createdAt: dateMock,
    updatedAt: dateMock,
    title: "TestLevel1",
    type: "Match",
    statement: "Do smthing",
    input: "A sentence with key",
    output: "key",
    solution: "key",
  },
  {
    id: 2,
    createdAt: dateMock,
    updatedAt: dateMock,
    title: "TestLevel2",
    type: "Match",
    statement: "Do smthingggg",
    input: "A sentence with ku",
    output: "ku",
    solution: "ku",
  },
];

const oneLevel: Level = levelArray[0];
const updateLevel: Level = { ...levelArray[0], title: "UpdatedLevel" };

const prismaMock = {
  level: {
    findMany: jest.fn().mockResolvedValue(levelArray),
    findUnique: jest.fn().mockReturnValue(null), //createOne checks if level already exists
    create: jest.fn().mockReturnValue(oneLevel),
    update: jest.fn().mockReturnValue(updateLevel),
    delete: jest.fn().mockReturnValue(oneLevel),
  },
};

describe("LevelService", () => {
  let service: LevelService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LevelService,
        {
          provide: PrismaService,
          useValue: prismaMock,
        },
      ],
    }).compile();

    service = module.get<LevelService>(LevelService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  describe("getAll", () => {
    it("should return an array of levels", async () => {
      const levels = await service.getAll();
      expect(levels).toEqual(levelArray);
    });
  });

  describe("createOne", () => {
    it("should successfully create a level", async () => {
      const level = await service.createOne({
        title: "TestLevel1",
        type: "Match",
        statement: "Do smthing",
        input: "A sentence with key",
        output: "key",
        solution: "key",
      });
      expect(level).toEqual(oneLevel);
    });

    it("should throw an error because the solution is invalid", async () => {
      try {
        await service.createOne({
          title: "TestLevel1",
          type: "Match",
          statement: "Do smthing",
          input: "A sentence with key",
          output: "key",
          solution: "bad solution",
        });
      } catch (error) {
        expect(error).toBeInstanceOf(ForbiddenException);
        expect(error.message).toBe("Solution doesn't match the output");
      }
    });
  });

  describe("updateOne", () => {
    it("should update a level", async () => {
      const updatedLevel = await service.updateOne(1, {
        title: "UpdatedLevel1",
      });
      // console.warn("UPDATED LEVEL :", updatedLevel);
      expect(updatedLevel).toEqual(updateLevel);
    });
  });

  describe("deleteOne", () => {
    it("should return {deleted: true}", () => {
      expect(service.deleteOne(1)).resolves.toEqual({ deleted: true });
    });
  });
});
