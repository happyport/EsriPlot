// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/nls/el/ForestBasedClassificationAndRegression",{modifiedTitle:"Forest-based \u03c4\u03b1\u03be\u03b9\u03bd\u03cc\u03bc\u03b7\u03c3\u03b7 \u03ba\u03b1\u03b9 \u03c0\u03b1\u03bb\u03b9\u03bd\u03b4\u03c1\u03cc\u03bc\u03b7\u03c3\u03b7 - ${goal}",train:"\u0395\u03ba\u03c0\u03b1\u03af\u03b4\u03b5\u03c5\u03c3\u03b7",trainAndPredict:"\u0395\u03ba\u03c0\u03b1\u03af\u03b4\u03b5\u03c5\u03c3\u03b7 \u03ba\u03b1\u03b9 \u03c0\u03c1\u03cc\u03b2\u03bb\u03b5\u03c8\u03b7",selectGoal:"\u03a4\u03b9 \u03b8\u03b1 \u03b8\u03ad\u03bb\u03b1\u03c4\u03b5 \u03bd\u03b1 \u03ba\u03ac\u03bd\u03b5\u03c4\u03b5;",
trainGoal:"\u0395\u03ba\u03c0\u03b1\u03af\u03b4\u03b5\u03c5\u03c3\u03b7 \u03b5\u03bd\u03cc\u03c2 \u03bc\u03bf\u03bd\u03c4\u03ad\u03bb\u03bf\u03c5 \u03b3\u03b9\u03b1 \u03b1\u03be\u03b9\u03bf\u03bb\u03cc\u03b3\u03b7\u03c3\u03b7 \u03b5\u03c0\u03b9\u03b4\u03cc\u03c3\u03b5\u03c9\u03bd \u03bc\u03bf\u03bd\u03c4\u03ad\u03bb\u03c9\u03bd",trainAndPredictGoal:"\u0395\u03ba\u03c0\u03b1\u03af\u03b4\u03b5\u03c5\u03c3\u03b7 \u03b5\u03bd\u03cc\u03c2 \u03bc\u03bf\u03bd\u03c4\u03ad\u03bb\u03bf\u03c5 \u03ba\u03b1\u03b9 \u03c0\u03c1\u03cc\u03b2\u03bb\u03b5\u03c8\u03b7 \u03c4\u03b9\u03bc\u03ce\u03bd",
inFeaturesLabel:"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ae \u03b8\u03b5\u03bc\u03b1\u03c4\u03b9\u03ba\u03bf\u03cd \u03b5\u03c0\u03b9\u03c0\u03ad\u03b4\u03bf\u03c5 \u03b5\u03ba\u03c0\u03b1\u03af\u03b4\u03b5\u03c5\u03c3\u03b7\u03c2",variablePredictLabel:"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ae \u03c4\u03bf\u03c5 \u03c0\u03b5\u03b4\u03af\u03bf\u03c5 \u03b3\u03b9\u03b1 \u03c0\u03c1\u03cc\u03b2\u03bb\u03b5\u03c8\u03b7",categorical:"\u039a\u03b1\u03c4\u03b7\u03b3\u03bf\u03c1\u03b9\u03ba\u03cc",chooseExplanatoryField:"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ae \u03b5\u03bd\u03cc\u03c2 \u03ae \u03c0\u03b5\u03c1\u03b9\u03c3\u03c3\u03cc\u03c4\u03b5\u03c1\u03c9\u03bd \u03b5\u03c0\u03b5\u03be\u03b7\u03b3\u03b7\u03bc\u03b1\u03c4\u03b9\u03ba\u03ce\u03bd \u03c0\u03b5\u03b4\u03af\u03c9\u03bd",
chooseFeaturesToPredict:"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ae \u03b5\u03bd\u03cc\u03c2 \u03b8\u03b5\u03bc\u03b1\u03c4\u03b9\u03ba\u03bf\u03cd \u03b5\u03c0\u03b9\u03c0\u03ad\u03b4\u03bf\u03c5 \u03b3\u03b9\u03b1 \u03c0\u03c1\u03cc\u03b2\u03bb\u03b5\u03c8\u03b7 \u03c4\u03c9\u03bd \u03c4\u03b9\u03bc\u03ce\u03bd \u03c4\u03bf\u03c5",chooseExplainMatch:"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ae \u03c4\u03c1\u03cc\u03c0\u03bf\u03c5 \u03b1\u03bd\u03c4\u03b9\u03c3\u03c4\u03bf\u03af\u03c7\u03b9\u03c3\u03b7\u03c2 \u03b5\u03c0\u03b5\u03be\u03b7\u03b3\u03b7\u03bc\u03b1\u03c4\u03b9\u03ba\u03ce\u03bd \u03c0\u03b5\u03b4\u03af\u03c9\u03bd",
options:"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2",advancedForestOptions:"\u03a0\u03c1\u03bf\u03b7\u03b3\u03bc\u03ad\u03bd\u03b5\u03c2 \u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2 \u03b4\u03b1\u03c3\u03ce\u03bd",numberOfTrees:"\u0391\u03c1\u03b9\u03b8\u03bc\u03cc\u03c2 \u03b4\u03ad\u03bd\u03c4\u03c1\u03c9\u03bd",minimumLeafSize:"\u0395\u03bb\u03ac\u03c7\u03b9\u03c3\u03c4\u03bf \u03bc\u03ad\u03b3\u03b5\u03b8\u03bf\u03c2 \u03c6\u03cd\u03bb\u03bb\u03c9\u03bd",maximumTreeDepth:"\u039c\u03ad\u03b3\u03b9\u03c3\u03c4\u03bf \u03b2\u03ac\u03b8\u03bf\u03c2 \u03b4\u03ad\u03bd\u03c4\u03c1\u03c9\u03bd",
sampleSize:"\u0394\u03b9\u03b1\u03b8\u03ad\u03c3\u03b9\u03bc\u03b1 \u03b4\u03b5\u03b4\u03bf\u03bc\u03ad\u03bd\u03b1 \u03b1\u03bd\u03ac \u03b4\u03ad\u03bd\u03c4\u03c1\u03bf (%)",randomVariables:"\u0391\u03c1\u03b9\u03b8\u03bc\u03cc\u03c2 \u03c4\u03c5\u03c7\u03b1\u03af\u03b1 \u03b4\u03b5\u03b9\u03b3\u03bc\u03b1\u03c4\u03bf\u03bb\u03b7\u03c0\u03c4\u03bf\u03cd\u03bc\u03b5\u03bd\u03c9\u03bd \u03bc\u03b5\u03c4\u03b1\u03b2\u03bb\u03b7\u03c4\u03ce\u03bd",variableConstraintMsg:"\u03a0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03b1\u03c0\u03cc \u03c4\u03bf 1 \u03c9\u03c2 \u03c4\u03bf\u03bd \u03b1\u03c1\u03b9\u03b8\u03bc\u03cc \u03c4\u03c9\u03bd \u03b5\u03c0\u03b5\u03be\u03b7\u03b3\u03b7\u03bc\u03b1\u03c4\u03b9\u03ba\u03ce\u03bd \u03bc\u03b5\u03c4\u03b1\u03b2\u03bb\u03b7\u03c4\u03ce\u03bd.",
validationOptions:"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2 \u03b5\u03c0\u03b9\u03ba\u03cd\u03c1\u03c9\u03c3\u03b7\u03c2",percentageForValidation:"\u0394\u03b5\u03b4\u03bf\u03bc\u03ad\u03bd\u03b1 \u03b5\u03ba\u03c0\u03b1\u03af\u03b4\u03b5\u03c5\u03c3\u03b7\u03c2 \u03c0\u03bf\u03c5 \u03b5\u03be\u03b1\u03b9\u03c1\u03bf\u03cd\u03bd\u03c4\u03b1\u03b9 \u03b3\u03b9\u03b1 \u03b5\u03c0\u03b9\u03ba\u03cd\u03c1\u03c9\u03c3\u03b7 (%)",outputLayerName:"FBCR ${inFeaturesName}",itemDescription:"Feature layer \u03c0\u03bf\u03c5 \u03b4\u03b7\u03bc\u03b9\u03bf\u03c5\u03c1\u03b3\u03b5\u03af\u03c4\u03b1\u03b9 \u03b1\u03c0\u03cc \u03c4\u03b7\u03bd \u03b5\u03ba\u03c4\u03ad\u03bb\u03b5\u03c3\u03b7 \u03c4\u03c9\u03bd \u03bb\u03cd\u03c3\u03b5\u03c9\u03bd \u00abForest-based \u03c4\u03b1\u03be\u03b9\u03bd\u03cc\u03bc\u03b7\u03c3\u03b7 \u03ba\u03b1\u03b9 \u03c0\u03b1\u03bb\u03b9\u03bd\u03b4\u03c1\u03cc\u03bc\u03b7\u03c3\u03b7 ${goal}\u00bb.",
itemTags:"\u0391\u03c0\u03bf\u03c4\u03ad\u03bb\u03b5\u03c3\u03bc\u03b1 \u03b1\u03bd\u03ac\u03bb\u03c5\u03c3\u03b7\u03c2, Forest-based \u03c4\u03b1\u03be\u03b9\u03bd\u03cc\u03bc\u03b7\u03c3\u03b7  \u03ba\u03b1\u03b9 \u03c0\u03b1\u03bb\u03b9\u03bd\u03b4\u03c1\u03cc\u03bc\u03b7\u03c3\u03b7, ${inFeaturesName}, ${goal}",itemSnippet:"Feature layer \u03c0\u03bf\u03c5 \u03b4\u03b7\u03bc\u03b9\u03bf\u03c5\u03c1\u03b3\u03b5\u03af\u03c4\u03b1\u03b9 \u03b1\u03c0\u03cc \u03c4\u03b7\u03bd Forest-based \u03c4\u03b1\u03be\u03b9\u03bd\u03cc\u03bc\u03b7\u03c3\u03b7 \u03ba\u03b1\u03b9 \u03c0\u03b1\u03bb\u03b9\u03bd\u03b4\u03c1\u03cc\u03bc\u03b7\u03c3\u03b7 (${goal})"});