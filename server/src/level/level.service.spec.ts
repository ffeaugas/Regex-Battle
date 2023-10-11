import { Test, TestingModule } from "@nestjs/testing";
import { LevelService } from "./level.service";
import { PrismaService } from "src/prisma/prisma.service";
import { Level } from "@prisma/client";

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

const prismaMock = {
  level: {
    findMany: jest.fn().mockResolvedValue(levelArray),
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
});
