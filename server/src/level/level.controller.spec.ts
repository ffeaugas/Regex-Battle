import { Test, TestingModule } from "@nestjs/testing";
import { LevelController } from "./level.controller";
import { LevelService } from "./level.service";
import { LevelDTO } from "./dto/level.dto";
import { Level } from "@prisma/client";

const testLevels: LevelDTO[] = [
  {
    title: "TestLevel1",
    type: "Match",
    statement: "Do smthing",
    input: "A sentence with key",
    output: "key",
    solution: "key",
  },
  {
    title: "TestLevel2",
    type: "Match",
    statement: "Do smthingggg",
    input: "A sentence with ku",
    output: "ku",
    solution: "ku",
  },
];
const testLevelId = 8;
const testDate = new Date();

describe("LevelController", () => {
  let controller: LevelController;
  let service: LevelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LevelController],
      providers: [
        {
          provide: LevelService,
          useValue: {
            getAll: jest
              .fn<Promise<LevelDTO[]>, []>()
              .mockResolvedValue(testLevels),
            createOne: jest
              .fn<Promise<Level>, [LevelDTO]>()
              .mockImplementation((level) =>
                Promise.resolve({
                  id: testLevelId,
                  createdAt: testDate,
                  updatedAt: testDate,
                  ...level,
                })
              ),
            updateOne: jest
              .fn<Promise<Level>, [number, LevelDTO]>()
              .mockImplementation((id, level) =>
                Promise.resolve({
                  id,
                  updatedAt: testDate,
                  createdAt: testDate,
                  ...level,
                })
              ),
            deleteOne: jest
              .fn<Promise<{ deleted: boolean }>, []>()
              .mockImplementation(() => Promise.resolve({ deleted: true })),
          },
        },
      ],
    }).compile();

    controller = module.get<LevelController>(LevelController);
    service = module.get(LevelService);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });

  describe("getLevels", () => {
    it("should get an array of levels", async () => {
      await expect(controller.getLevels()).resolves.toEqual([
        {
          title: "TestLevel1",
          type: "Match",
          statement: "Do smthing",
          input: "A sentence with key",
          output: "key",
          solution: "key",
        },
        {
          title: "TestLevel2",
          type: "Match",
          statement: "Do smthingggg",
          input: "A sentence with ku",
          output: "ku",
          solution: "ku",
        },
      ]);
    });
  });

  describe("newLevel", () => {
    it("shoudl create a level", async () => {
      const newLevel: LevelDTO = {
        title: "TestLevel1",
        type: "Match",
        statement: "Do smthing",
        input: "A sentence with key",
        output: "key",
        solution: "key",
      };
      await expect(controller.createLevel(newLevel)).resolves.toEqual({
        id: testLevelId,
        createdAt: testDate,
        updatedAt: testDate,
        ...newLevel,
      });
    });
  });

  describe("updateLevel", () => {
    it("should update a level", async () => {
      const updatedLevel: LevelDTO = {
        title: "TestLevel1",
        type: "Match",
        statement: "Do smthing",
        input: "A sentence with key",
        output: "key",
        solution: "key",
      };
      await expect(
        controller.updateLevel(testLevelId, updatedLevel)
      ).resolves.toEqual({
        id: testLevelId,
        createdAt: testDate,
        updatedAt: testDate,
        ...updatedLevel,
      });
    });
  });

  describe("deleteLevel", () => {
    it("should delete a level", async () => {
      await expect(controller.deleteLevel(testLevelId)).resolves.toEqual({
        deleted: true,
      });
    });

    it("should return that it didn't delete a level", async () => {
      const deleteSpy = jest
        .spyOn(service, "deleteOne")
        .mockResolvedValue({ deleted: false });
      await expect(controller.deleteLevel(-5)).resolves.toEqual({
        deleted: false,
      });
      expect(deleteSpy).toBeCalledWith(-5);
    });
  });
});
