import Species from "../models/species-model.js";

export const store = async (req, res) => {
  try {
    const specie = await Species.create({
        name: req.body.name,
        discoveryLocation: req.body.discoveryLocation,
        rarity:req.body.rarity,
        documented:req.body.documented,
    });

    res.status(201).json(specie);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const index = async (req, res) => {
  try {
    const species = await Species.find().exec();
    res.json(species);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const show = async (req, res) => {
  try {
    const specie = await Species.findById(req.params.id).exec();
    if (!specie) {
      return res.status(404).json({ error: 'Species não encontrada' });
    }
    res.json(specie);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const update = async (req, res) => {
    try {
      const species = await Species.findByIdAndUpdate(
        req.params.id,
        req.body
      ).exec();
  
      if (!species ) {
        return res.status(404).json({ error: 'Species não encontrado' });
      }
      return res.json(species);
    } catch (error) {
      res.status(400).send(error);
    }
  };
  
  
  export const destroy = async (req, res) => {
    try {
      const specie = await Species.findByIdAndDelete(req.params.id).exec();
      if (!specie) {
        return res.status(404).json({ error: 'Specie não encontrado' });
      }
      res.json({ message: 'Specie deletada com sucesso' });
    } catch (error) {
      res.status(400).send(error);
    }
  };