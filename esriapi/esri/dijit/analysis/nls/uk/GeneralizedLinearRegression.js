// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/nls/uk/GeneralizedLinearRegression",{modifiedTitle:"\u0413\u0435\u043d\u0435\u0440\u0430\u043b\u0456\u0437\u043e\u0432\u0430\u043d\u0430 \u043b\u0456\u043d\u0456\u0439\u043d\u0430 \u0440\u0435\u0433\u0440\u0435\u0441\u0456\u044f - ${goal}",fit:"\u041f\u0456\u0434\u0456\u0433\u043d\u0430\u0442\u0438",fitAndPredict:"\u041f\u0456\u0434\u0433\u043e\u043d\u043a\u0430 \u0442\u0430 \u043f\u0440\u043e\u0433\u043d\u043e\u0437",selectGoal:"\u0429\u043e \u0432\u0438 \u0431\u0430\u0436\u0430\u0454\u0442\u0435 \u0437\u0440\u043e\u0431\u0438\u0442\u0438?",
fitGoal:"\u0412\u0438\u043a\u043e\u043d\u0430\u0442\u0438 \u043f\u0456\u0434\u0433\u043e\u043d\u043a\u0443 \u043c\u043e\u0434\u0435\u043b\u0456 \u0434\u043b\u044f \u043e\u0446\u0456\u043d\u043a\u0438 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u0456 \u043c\u043e\u0434\u0435\u043b\u0456",fitAndPredictGoal:"\u0412\u0438\u043a\u043e\u043d\u0430\u0442\u0438 \u043f\u0456\u0434\u0433\u043e\u043d\u043a\u0443 \u043c\u043e\u0434\u0435\u043b\u0456 \u0442\u0430 \u0441\u043f\u0440\u043e\u0433\u043d\u043e\u0437\u0443\u0432\u0430\u0442\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f",
inputLayerLabel:"\u0412\u0438\u0431\u0440\u0430\u0442\u0438 \u0448\u0430\u0440, \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0456 \u044f\u043a\u043e\u0433\u043e \u0442\u0440\u0435\u0431\u0430 \u0437\u0433\u0435\u043d\u0435\u0440\u0443\u0432\u0430\u0442\u0438 \u043c\u043e\u0434\u0435\u043b\u044c",chooseDependentField:"\u0412\u0438\u0431\u0440\u0430\u0442\u0438 \u043f\u043e\u043b\u044f \u0434\u043b\u044f \u043c\u043e\u0434\u0435\u043b\u044e\u0432\u0430\u043d\u043d\u044f",chooseDataType:"\u0412\u0438\u0431\u0440\u0430\u0442\u0438 \u0442\u0438\u043f \u0434\u0430\u043d\u0438\u0445, \u044f\u043a\u0456 \u0432\u0438 \u043c\u043e\u0434\u0435\u043b\u044e\u0454\u0442\u0435",
continuousData:"\u041d\u0435\u043f\u0435\u0440\u0435\u0440\u0432\u043d\u0456",binaryData:"\u0411\u0456\u043d\u0430\u0440\u043d\u0456",countData:"\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c",chooseExplanatoryField:"\u0412\u0438\u0431\u0440\u0430\u0442\u0438 \u043f\u043e\u044f\u0441\u043d\u044e\u0432\u0430\u043b\u044c\u043d\u0456 \u043f\u043e\u043b\u044f",chooseFeaturesToPredict:"\u0412\u0438\u0431\u0440\u0430\u0442\u0438 \u0448\u0430\u0440, \u0434\u043b\u044f \u043a\u043e\u0442\u0440\u043e\u0433\u043e \u0442\u0440\u0435\u0431\u0430 \u0441\u043f\u0440\u043e\u0433\u043d\u043e\u0437\u0443\u0432\u0430\u0442\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f",
chooseExplainMatch:"\u0412\u0438\u0431\u0440\u0430\u0442\u0438 \u0441\u043f\u043e\u0441\u0456\u0431 \u0437\u0456\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u044f \u043f\u043e\u044f\u0441\u043d\u044e\u0432\u0430\u043b\u044c\u043d\u0438\u0445 \u043f\u043e\u043b\u0456\u0432",outputLayerName:"GLR ${inputLayerName}",itemDescription:"\u0412\u0435\u043a\u0442\u043e\u0440\u043d\u0438\u0439 \u0448\u0430\u0440, \u0437\u0433\u0435\u043d\u0435\u0440\u043e\u0432\u0430\u043d\u0438\u0439 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0456 \u0432\u0438\u043a\u043e\u043d\u0430\u043d\u043d\u044f \u0433\u0435\u043d\u0435\u0440\u0430\u043b\u0456\u0437\u043e\u0432\u0430\u043d\u043e\u0457 \u043b\u0456\u043d\u0456\u0439\u043d\u043e\u0457 \u0440\u0435\u0433\u0440\u0435\u0441\u0456\u0457 ${goal}.",
itemTags:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0430\u043d\u0430\u043b\u0456\u0437\u0443, \u0433\u0435\u043d\u0435\u0440\u0430\u043b\u0456\u0437\u043e\u0432\u0430\u043d\u0430 \u043b\u0456\u043d\u0456\u0439\u043d\u0430 \u0440\u0435\u0433\u0440\u0435\u0441\u0456\u044f, ${inputLayerName}, ${goal}",itemSnippet:"\u0412\u0435\u043a\u0442\u043e\u0440\u043d\u0438\u0439 \u0448\u0430\u0440, \u0437\u0433\u0435\u043d\u0435\u0440\u043e\u0432\u0430\u043d\u0438\u0439 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0456 \u0433\u0435\u043d\u0435\u0440\u0430\u043b\u0456\u0437\u043e\u0432\u0430\u043d\u043e\u0457 \u043b\u0456\u043d\u0456\u0439\u043d\u043e\u0457 \u0440\u0435\u0433\u0440\u0435\u0441\u0456\u0457 (${goal})"});