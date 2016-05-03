module.exports = function(app){
    $M.setting={};
    var db = $F.low('setting/lib.json');
    var db2 = $F.low('setting/dictionary.json');
    //��ȡһ��������
    $M.setting['getConfig']=function *(configKey){
        var cdata=db(configKey).first();
        if(cdata){
            return cdata;
        }else{
            var res = yield $D('config').findOne({where:{key:configKey}}, {raw: true});
            var curData={};
            var listData=JSON.parse(res.content);
            $F._.each(listData,function(el, index, list){
                curData[el.key]=el.value;
            });
            db(configKey).push(curData);
            return curData;
        }
    };
    //ɾ��һ��������
    $M.setting['delConfig']=function *(configKey){
        delete db.object[configKey];
    };
    $M.setting['getDictionary']=function *(configKey){
        var cdata=db2(configKey).first();
        if(cdata){
            return cdata;
        }else{
            var res = yield $D('config').findOne({where:{key:configKey}}, {raw: true});
            var curData={};
            var listData=JSON.parse(res.content);
            $F._.each(listData,function(el, index, list){
                curData[el.key]=el.value;
            });
            db2(configKey).push(curData);
            return curData;
        }
    };
    //ɾ��һ��������
    $M.setting['delDictionary']=function *(configKey){
        delete db2.object[configKey];
    }
};
