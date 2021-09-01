const db = require('../db');

//=======================================================
// N1 Search Category
module.exports.n1SearchCategory = function(req, res){
    var id = req.params.id;
    var category = db.get('n1').value();
    var arrayDe = [];
    if(id == 1){
        var hantu = category[0];
        arrayDe = hantu.hantu;
    } else if(id == 2){
        var vocab = category[1];
        arrayDe = vocab.tuvung;
    }else if(id == 3){
        var grama = category[2];
        arrayDe = grama.nguphap;
    }
    //console.log('Data');
    //console.log(arrayDe[0]);
    if(arrayDe.length){
        res.render('category/category', {data:arrayDe[0], categoryId: id, levelID:1});
    }else{
        res.render('error/error');
    }
    
};
//=======================================================
// N2 Search Category
module.exports.n2SearchCategory = function(req, res){
    var id = req.params.id;
    var category = db.get('n2').value();
    var arrayDe = [];
    if(id == 1){
        var hantu = category[0];
        arrayDe = hantu.hantu;
    } else if(id == 2){
        var vocab = category[1];
        arrayDe = vocab.tuvung;
    }else if(id == 3){
        var grama = category[2];
        arrayDe = grama.nguphap;
    }
    //console.log('Data');
    //console.log(arrayDe[0]);
    if(arrayDe.length){
        res.render('category/category', {data:arrayDe[0], categoryId: id, levelID:2});
    }else{
        res.render('error/error');
    }
    
};
//=======================================================
// N3 Search Category
module.exports.n3SearchCategory = function(req, res){
    var id = req.params.id;
    var category = db.get('n3').value();
    var arrayDe = [];
    if(id == 1){
        var hantu = category[0];
        arrayDe = hantu.hantu;
    } else if(id == 2){
        var vocab = category[1];
        arrayDe = vocab.tuvung;
    }else if(id == 3){
        var grama = category[2];
        arrayDe = grama.nguphap;
    }
    //console.log('Data');
    //console.log(arrayDe[0]);
    if(arrayDe.length){
        res.render('category/category', {data:arrayDe[0], categoryId: id, levelID:3});
    }else{
        res.render('error/error');
    }
    
};
//=======================================================
// N4 Search Category
module.exports.n4SearchCategory = function(req, res){
    var id = req.params.id;
    var category = db.get('n4').value();
    var arrayDe = [];
    if(id == 1){
        var hantu = category[0];
        arrayDe = hantu.hantu;
    } else if(id == 2){
        var vocab = category[1];
        arrayDe = vocab.tuvung;
    }else if(id == 3){
        var grama = category[2];
        arrayDe = grama.nguphap;
    }
    //console.log('Data');
    //console.log(arrayDe[0]);
    if(arrayDe.length){
        res.render('category/category', {data:arrayDe[0], categoryId: id, levelID:4});
    }else{
        res.render('error/error');
    }
    
};
//=======================================================
// N5 Search Category
module.exports.n5SearchCategory = function(req, res){
    var id = req.params.id;
    var category = db.get('n5').value();
    var arrayDe = [];
    if(id == 1){
        var hantu = category[0];
        arrayDe = hantu.hantu;
    } else if(id == 2){
        var vocab = category[1];
        arrayDe = vocab.tuvung;
    }else if(id == 3){
        var grama = category[2];
        arrayDe = grama.nguphap;
    }
    //console.log('Data');
    //console.log(arrayDe[0]);
    if(arrayDe.length){
        res.render('category/category', {data:arrayDe[0], categoryId: id, levelID:5});
    }else{
        res.render('error/error');
    }
    
};
//=======================================================
// N1 Test
module.exports.n1Test = function(req, res){
    var categoryid = req.params.category;
    var testid = req.params.testid;
    var category = db.get('n1').value();
    var arrayDe = [];
    switch(categoryid){
        case '1':
            var hantu = category[0];
            arrayDe = hantu.hantu;
            break;
        case '2':
            var vocab = category[1];
            arrayDe = vocab.tuvung;
            break;
        case '3':
            var grama = category[2];
            arrayDe = grama.nguphap;
            break;
        default:
            //console.log("Controller n1Test: Error " + categoryid)
    }
    var key = "de" + testid;
    //console.log(arrayDe);
    var dataTestObjetc = arrayDe[0];
    //console.log(dataTestObjetc);
    var arrayTest = dataTestObjetc[key];
    var arrayTestFilter = arrayTest.filter((test)=>{
        return test.CorrectAnswer !== null;
    });
    //console.log(arrayTest);
    res.render('test/test', {data:arrayTestFilter, dataTest:dataTestObjetc, categoryId:categoryid, levelID:1});
};
//=======================================================
// N2 Test
module.exports.n2Test = function(req, res){
    var categoryid = req.params.category;
    var testid = req.params.testid;
    var category = db.get('n2').value();
    var arrayDe = [];
    switch(categoryid){
        case '1':
            var hantu = category[0];
            arrayDe = hantu.hantu;
            break;
        case '2':
            var vocab = category[1];
            arrayDe = vocab.tuvung;
            break;
        case '3':
            var grama = category[2];
            arrayDe = grama.nguphap;
            break;
        default:
            //console.log("Controller n2Test: Error " + categoryid)
    }
    var key = "de" + testid;
    //console.log(arrayDe);
    var dataTestObjetc = arrayDe[0];
    //console.log(dataTestObjetc);
    var arrayTest = dataTestObjetc[key];
    var arrayTestFilter = arrayTest.filter((test)=>{
        return test.CorrectAnswer !== null;
    });
    //console.log(arrayTest);
    res.render('test/test', {data:arrayTestFilter, dataTest:dataTestObjetc, categoryId:categoryid, levelID:2});
};
//=======================================================
// N3 Test
module.exports.n3Test = function(req, res){
    var categoryid = req.params.category;
    var testid = req.params.testid;
    var category = db.get('n3').value();
    var arrayDe = [];
    switch(categoryid){
        case '1':
            var hantu = category[0];
            arrayDe = hantu.hantu;
            break;
        case '2':
            var vocab = category[1];
            arrayDe = vocab.tuvung;
            break;
        case '3':
            var grama = category[2];
            arrayDe = grama.nguphap;
            break;
        default:
            //console.log("Controller n3Test: Error " + categoryid)
    }
    var key = "de" + testid;
    //console.log(arrayDe);
    var dataTestObjetc = arrayDe[0];
    //console.log(dataTestObjetc);
    var arrayTest = dataTestObjetc[key];
    var arrayTestFilter = arrayTest.filter((test)=>{
        return test.CorrectAnswer !== null;
    });
    // console.log(arrayTest);
    res.render('test/test', {data:arrayTestFilter, dataTest:dataTestObjetc, categoryId:categoryid, levelID:3});
};
//=======================================================
// N4 Test
module.exports.n4Test = function(req, res){
    var categoryid = req.params.category;
    var testid = req.params.testid;
    var category = db.get('n4').value();
    var arrayDe = [];
    switch(categoryid){
        case '1':
            var hantu = category[0];
            arrayDe = hantu.hantu;
            break;
        case '2':
            var vocab = category[1];
            arrayDe = vocab.tuvung;
            break;
        case '3':
            var grama = category[2];
            arrayDe = grama.nguphap;
            break;
        default:
            //console.log("Controller n4Test: Error " + categoryid)
    }
    var key = "de" + testid;
    //console.log(arrayDe);
    var dataTestObjetc = arrayDe[0];
    //console.log(dataTestObjetc);
    var arrayTest = dataTestObjetc[key];
    var arrayTestFilter = arrayTest.filter((test)=>{
        return test.CorrectAnswer !== null;
    });
    //console.log(arrayTest);
    res.render('test/test', {data:arrayTestFilter, dataTest:dataTestObjetc, categoryId:categoryid, levelID:4});
};
//=======================================================
// N4 Test
module.exports.n5Test = function(req, res){
    var categoryid = req.params.category;
    var testid = req.params.testid;
    var category = db.get('n5').value();
    var arrayDe = [];
    switch(categoryid){
        case '1':
            var hantu = category[0];
            arrayDe = hantu.hantu;
            break;
        case '2':
            var vocab = category[1];
            arrayDe = vocab.tuvung;
            break;
        case '3':
            var grama = category[2];
            arrayDe = grama.nguphap;
            break;
        default:
            //console.log("Controller n5Test: Error " + categoryid)
    }
    var key = "de" + testid;
    //console.log(arrayDe);
    var dataTestObjetc = arrayDe[0];
    //console.log(dataTestObjetc);
    var arrayTest = dataTestObjetc[key];
    var arrayTestFilter = arrayTest.filter((test)=>{
        return test.CorrectAnswer !== null;
    });
    //console.log(arrayTest);
    res.render('test/test', {data:arrayTestFilter, dataTest:dataTestObjetc, categoryId:categoryid, levelID:5});
};