module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Article', {
        id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            defaultValue: null,
            field: "id"
        },
        creator: {
            type: DataTypes.STRING(255),
            allowNull: false,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: null,
            field: "creator"
        },
        context: {
            type: DataTypes.STRING(2000),
            allowNull: false,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: null,
            field: "context"
        },
        createdTime: {
            type: DataTypes.DATE,
            allowNull: true,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: null,
            field: "created_time"
        },
        updatedTime: {
            type: DataTypes.DATE,
            allowNull: true,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: null,
            field: "updated_time"
        },
        status: {
            type: DataTypes.INTEGER(4),
            allowNull: false,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: null,
            field: "status"
        },
        isDeleted: {
            type: DataTypes.INTEGER(1),
            allowNull: false,
            autoIncrement: false,
            primaryKey: false,
            defaultValue: 0,
            field: "is_deleted"
        }
    }, {
        tableName: 'article',
        timestamps: false
    });
};