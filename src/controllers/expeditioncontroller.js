import Expedition from "../models/expedition-model.js";

export const store = async (req, res) => {
  try {
    const expedition = await Expedition.create({
        location: req.body.location,
        date: req.body.date,
        participants:req.body.participants,
        speciesFound: req.body.speciesFound
    });

    res.status(201).json(expedition);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const index = async (req, res) => {
  try {
    const expeditions = await Expedition.find().exec();
    res.json(expeditions);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const show = async (req, res) => {
  try {
    const expedition = await Expedition.findById(req.params.id).exec();
    if (!expedition) {
      return res.status(404).json({ error: 'expedition not found' });
    }
    res.json(expedition);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const update = async (req, res) => {
  try {
    const expedition = await Expedition.findByIdAndUpdate(
      req.params.id,
      req.body
    ).exec();

    if (!expedition ) {
      return res.status(404).json({ error: 'expedition não encontrada' });
    }
    return res.json(expedition);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const destroy = async (req, res) => {
  try {
    const expedition = await Expedition.findByIdAndDelete(req.params.id).exec();
    if (!expedition) {
      return res.status(404).json({ error: 'expedition não encontrada' });
    }
    res.json({ message: 'expedition deletada com sucesso' });
  } catch (error) {
    res.status(400).send(error);
  }
};