db.voos
  .find(
    {
      $or: [
        { "empresa.nome": "DELTA AIRLINES" },
        { "empresa.nome": "AMERICAN AIRLINES" },
      ],

      $and: [
        { "aeroportoOrigem.sigla": "SBGR" },
        { "aeroportoDestino.sigla": "KJFK" },
      ],
    },
    { vooId: 1, _id: 0 }
  )
  .limit(1);
// db.voos.find({$or: [{ "empresa.sigla": "DELTA AIRLINES" },{ "empresa.sigla": "AMERICAN AIRLINES" },],$and: [{ "aeroportoOrigem.sigla": "SBGR" },{ "aeroportoDestino.sigla": "KJFK" },],},{ _id: 0, vooId: 1 }).limit(1);
