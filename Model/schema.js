import mongoose from "mongoose"

const schema = new mongoose.Schema({
    end_year: { type: String, default: ""},
    intensity: { type: Number, required: true},
    sector: { type: String, default: ""},
    topic: { type: String, default: ""},
    insight: { type: String, required: true },
    url: { type: String, required: true },
    region: { type: String, default: ""},
    start_year: { type: String, default: ""},
    impact: { type: String, default: ""},
    added: { type: Date, required: true},
    published: { type: Date, required: true},
    country: { type: String, default: ""},
    relevance: { type: Number, required: true},
    pestle: { type: String, default: ""},
    source: { type: String, required: true},
    title: { type: String, required: true},
    likelihood: { type: Number, required: true}
  });
  
  const dbData =mongoose.model('insights',schema)
  export default dbData