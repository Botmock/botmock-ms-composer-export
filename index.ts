import "dotenv/config";
import { MSComposerExporter, FileWriter, Kind, ProjectReference } from "@botmock/export";

/**
 * Generates directory hierarchy in `./output`.
 *
 * @example
 * ```shell
 * npm start
 * ```
 */

 async function main(): Promise<void> {
    const projectReference: ProjectReference = {
        teamId: process.env.BOTMOCK_TEAM_ID as string,
        projectId: process.env.BOTMOCK_PROJECT_ID as string,
        boardId: process.env.BOTMOCK_BOARD_ID,
      };
    
  const exporter = new MSComposerExporter({ 
      token: process.env.BOTMOCK_TOKEN as string ,
      url: 'https://app.botmock.com/api/v2',
    });

  const { data } = await exporter.exportProjectUnderDataTransformations({ projectReference });
  const writeResult = await (new FileWriter({ directoryRoot: "./output" })).writeAllResourcesToFiles({ data });

  if (writeResult.kind !== Kind.OK) {
    console.error(writeResult.value);
  }
}

process.on("unhandledRejection", () => { });
process.on("uncaughtException", () => { });

main().catch((err: Error) => {
  console.error(err);
});
