import API, {BASE_URL} from './webapi-service';

export const getRecipes = async () => {
  try{
    return await API.get(`${BASE_URL}/recipes`).then( 
      response => {
        return { success: true, data: response.data };
      },
      error =>{
        console.log(error);
        return { success: false, data: response.data };
      }
    );
  }catch(error){
    console.log("Erro interno. " + error);
    return null;
  }
}
export const getRecipesIngredientV8 = async (filter,params) => {
  console.log(params);
  console.log(filter);
  try{
    /* http://localhost:3000/recipes?ingredients_like=`b%27 */ 
    return await API.get(`${BASE_URL}/recipes?${filter}_like=${params}`).then( 
      response => {
        console.log(response.data);
        return { success: true, data: response.data };
      },
      error =>{
        console.log(error);
        return { success: false, data: response.data };
      }
    );
  }catch(error){
    console.log("Erro interno. " + error);
    return null;
  }
}
export const getRecipesUsers = async (userId) => {
  try{
    return await API.get(`${BASE_URL}/recipes/${userId}`).then( 
      response => {
        console.log(response.data);
        return { success: true, data: response.data };
      },
      error =>{
        console.log(error);
        return { success: false, data: response.data };
      }
    );
  }catch(error){
    console.log("Erro interno. " + error);
    return null;
  }
}

export const getOwnRecipesByUserId = async (props) => {
  try{
    return await API.get(`${BASE_URL}/recipes?createdByUserId=${props.userId}`).then( 
      response => {
        return { success: true, data: response.data };
      },
      error =>{
        console.log(error);
        return { success: false, data: response.data };
      }
    );
  }catch(error){
    console.log("Erro interno. " + error);
    return null;
  }
}

export const getFavoriteRecipesByUserId = async (props) => {
  try{
    return await API.get(`${BASE_URL}/recipes?favoritedByUserIdList_like=${props.userId}`).then(    
      response => {     
        return { success: true, data: response.data };
      },
      error =>{
        console.log(error);
        return { success: false, data: response.data };
      }
    );
  }catch(error){
    console.log("Erro interno. " + error);
    return null;
  }
}

export const getRecipeById = async (params) => {
  try{
    return await API.get(`${BASE_URL}/recipes?id=${params.recipeId}`).then( 
      response => {
        return { success: true, data: response.data };
      },
      error =>{
        console.log(error);
        return { success: false, data: response.data };
      }
    );
  }catch(error){
    console.log("Erro interno. " + error);
    return null;
  }
}

export const getRecipesById = async (idList) => {
  
let textIdRecipe = "";
  idList.forEach(id => {
    textIdRecipe += `id=${id}&`;
  });
  try{
    return await API.get(`${BASE_URL}/recipes?${textIdRecipe}`).then( 
      response => {
        return { success: true, data: response.data };
      },
      error =>{
        console.log(error);
        return { success: false, data: response.data };
      }
    );
  }catch(error){
    console.log("Erro interno. " + error);
    return null;
  }
}

export const updateRecipeFavorite = async (params) => {
  try{
      return await API.patch(`${BASE_URL}/recipes/${params.id}`, params).then(
          response => {
              return {success: true, data: response.data};
          },
          error => {
              return {success: false, data: error};
          }
      )
  }catch(error){
      console.log("Erro interno. " + error);
      return null;
  }
}

export const updateRecipe = async (params) => {
  
  let validation = await validateGeneral(params);

  if(!validation.success)
    return { success: validation.success, data: validation.errorMessage};

  try{
      return await API.patch(`${BASE_URL}/recipes/${params.id}`, params).then(
          response => {
              return {success: true, data: response.data};
          },
          error => {
              return {success: false, data: error};
          }
      )
  }catch(error){
      console.log("Erro interno. " + error);
      return null;
  }
}

const validateGeneral = async (recipe) => {
  if(recipe.imgUrl.length == 0)
    return {success: false, errorMessage: 'Insira a URL da imagem'};

  if(recipe.ingredients.length == 0)
    return {success: false, errorMessage: 'Insira os ingredientes'};

  if(recipe.instructions.length == 0)
    return {success: false, errorMessage: 'Insira o modo de preparo'};

  if(recipe.name.length == 0)
    return {success: false, errorMessage: 'Insira o título da receita'};

  return {success: true, errorMessage: ''};
}

export const PostRecipes = async (params) => {
  let validation = await validateGeneral(params);

  if(!validation.success)
    return { success: validation.success, data: validation.errorMessage};

  try{
      return await API.post(`${BASE_URL}/recipes`, params).then(
          response => {
              return {success: true, data: response.data};
          },
          error => {
              return {success: false, data: error};
          }
      )
  }catch(error){
      console.log("Erro interno. " + error);
      return null;
  }
}
