import * as SQLite from 'expo-sqlite';
import { Platform } from 'react-native';

const Database = {
  getConnection: () => {
    
    const db = SQLite.openDatabase('database.db');

    db.transaction((tx) => {

      tx.executeSql('create table if not exists loginOptions (id integer primary key not null, userId integer not null, keepConnected numeric not null, userEmail text, userPassword text);');
      tx.executeSql('create table if not exists lastSeen (id integer primary key not null, recipeId integer not null);');
    });

    const ExecuteQuery = (sql, params = []) =>
      new Promise((resolve, reject) => {
        db.transaction((trans) => {
          trans.executeSql(
            sql,
            params,
            (trans, results) => {
              resolve(results);
            },
            (error) => {
              console.log(error);
              reject(error);
            }
          );
        });
      });

    return ExecuteQuery;
  },
};

const DB_EXEC = Database.getConnection();

export const getLoginOptions = async () => {
  let results = await DB_EXEC(`select * from loginOptions order by id desc`);

  if(Platform.OS != 'web')
    return results.rows._array;
  
  return results.rows;
}

export const insertLoginOptions = async (params) => {
  console.log("inserindo login options");

  let results = await DB_EXEC(`insert into loginOptions(keepConnected,userId,userEmail,userPassword) values (?,?,?,?)`, [params.keepConnected,params.userId, params.email, params.password]);
  return results.rowsAffected;
}

export const updateLoginOptions = async (params) => {
  console.log("atualizando loginOptions");

  let results = await DB_EXEC(`update loginOptions set keepConnected = ?, userEmail = ?, userPassword = ? where userId = ?`, [params.keepConnected, params.email, params.password, params.userId]);
  return results.rowsAffected;
}

export const deleteLoginOptions = async (params) => {
  let results = await DB_EXEC(`delete from loginOptions where userId=?`, [params.userId]);
  console.log("sucesso ao matar todos os dados...");
  console.log(results.rowsAffected);
  return results.rowsAffected;
}

//#region Ultimos Vistos
export const insertLastSeen = async (params) => {
  let results = await DB_EXEC(`insert into lastSeen(recipeId) values (?)`, [params.recipeId]);
  return results.rowsAffected;
}

export const getLastSeen = async () => {
  let results = await DB_EXEC(`select * from lastSeen `);
  if(Platform.OS != 'web') 
    return results.rows._array;
  let arraySql = results.rows;
  let arrayJs = [];

  for (let index = 0; index < arraySql.length; index++) {
      arrayJs.push(arraySql[index]);
  }
 // console.log(arrayJs); 
  return arrayJs;
}
export const deleteLastSeen = async (lastSeenIdList) => {
  let rowsAffected = 0;

  await lastSeenIdList.forEach(async (id) => {
    let result = await DB_EXEC(`delete from lastSeen where id = (?)`, [id]);
    rowsAffected += result.rowsAffected;
  })

  return rowsAffected;
}
//#endregion




