import React from "react";
import { getAllModels } from "../lib/models";
import type { Model } from "../types";
const Models = async () => {
  const models = await getAllModels();
  return models.map((model: Model) => <p key={model.id}>{model.name}</p>);
};

export default Models;
