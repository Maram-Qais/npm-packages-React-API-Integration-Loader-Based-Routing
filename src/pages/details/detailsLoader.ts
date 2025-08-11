import { getPackage } from "../../api/queries/getPackage";
import type { PackageDetails } from "../../api/types/PackageDetails";
import type { Params } from "react-router-dom";

interface LoaderArgs {
  params: Params;
}
export interface DetailsLoaderResult {
  details: PackageDetails;
}
export const detailsLoader = async ({ params }: LoaderArgs): Promise<DetailsLoaderResult> => {
  const { name } = params;

  if (!name || name.trim() === "") {
    throw new Error("Name must be provided.");
  }

  const details = await getPackage(name);

  return { details };
};
