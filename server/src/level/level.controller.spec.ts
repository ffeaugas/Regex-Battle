import { Test, TestingModule } from "@nestjs/testing";
import { LevelController } from "./level.controller";
import { LevelService } from "./level.service";
import { LevelDTO } from "./dto/level.dto";

describe("LevelController", () => {
  let controller: LevelController;
  // let service: LevelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LevelController],
      providers: [
        {
          provide: LevelService,
          useValue: {
            getAll: jest.fn<Promise<LevelDTO[]>, []>().mockResolvedValue([
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
            ]),
          },
        },
      ],
    }).compile();

    controller = module.get<LevelController>(LevelController);
    // service = module.get(LevelService);
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
});
