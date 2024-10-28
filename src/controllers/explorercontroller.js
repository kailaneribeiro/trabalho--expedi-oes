import Explorer from "../models/explorer-model.js";

export const store = async (req, res) => {
  try {
    const explorer = await Explorer.create({
        name: req.body.name,
        fieldOfStudy: req.body.fieldOfStudy,
        expeditionsParticipated:req.body.expeditionsParticipated,
    });

    res.status(201).json(explorer);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const index = async (req, res) => {
  try {
    const exploreres = await Explorer.find().exec();
    res.json(exploreres);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const show = async (req, res) => {
  try {
    const explorer = await Explorer.findById(req.params.id).exec();
    if (!explorer) {
      return res.status(404).json({ error: 'expedition not found' });
    }
    res.json(explorer);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const update = async (req, res) => {
  try {
    const explorer = await Explorer.findByIdAndUpdate(
      req.params.id,
      req.body
    ).exec();

    if (!explorer ) {
      return res.status(404).json({ error: 'Explorer não encontrado' });
    }
    return res.json(explorer);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const destroy = async (req, res) => {
  try {
    const explorer = await Explorer.findByIdAndDelete(req.params.id).exec();
    if (!explorer) {
      return res.status(404).json({ error: 'Explorer não encontrado' });
    }
    res.json({ message: 'Explorer deletada com sucesso' });
  } catch (error) {
    res.status(400).send(error);
  }
};