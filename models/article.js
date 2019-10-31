const   mongoose            = require("mongoose"),
        uniqueValidator     = require("mongoose-unique-validator");

// Create schema for db
const Schema = mongoose.Schema;

// Create article scehma
const ArticleSchema = new Schema ({
    
    // Article title
    title: {
        type: String,
        required: true
    },
    //link to article
    link: {
        type:String,
        unique: true,
        required: true
    },
    // Save article or not
    saved: {
        type: Boolean,
        required: true,
        default: false
    },
    //Delete article or not
    deleted: {
        type: Boolean,
        required: true,
        default: false
      },
    // Date is set when added to database
    date: {
        type: Date,
        default: Date.now
      },
    // Notes is an array of reference ids
    notes: [{
        type: Schema.Types.ObjectId,
        ref: "Note",
        required: false
        }]

});

// plugin to make articles unique
ArticleSchema.plugin(uniqueValidator);

// Create article model
const Article = mongoose.model("Article" , ArticleSchema);

// Export Article for other uses
module.exports = Article;