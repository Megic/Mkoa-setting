/**
* Created by Mkoa
*/
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('dictionary',{
                name: {
                        type: DataTypes.STRING(50),
                        allowNull:false,
                        defaultValue:'0',
                        unique:false,
                        comment: '字典名称'
                      },
                key: {
                        type: DataTypes.STRING(50),
                        allowNull:false,
                        defaultValue:'0',
                        unique:true,
                        comment: '唯一标识'
                      },
                description: {
                        type: DataTypes.STRING(255),
                        allowNull:false,
                        defaultValue:'0',
                        unique:false,
                        comment: '简介'
                      },
                content: {
                        type: DataTypes.TEXT,
                        allowNull:false,
                        defaultValue:'0',
                        unique:false,
                        comment: '配置内容'
                      }}, {
        tableName:'mkoa_dictionary',
        comment: '字典表',
        timestamps:true,
        indexes:[],
        paranoid:false,
        charset: 'utf8',
        collate: 'utf8_general_ci'
    });
};