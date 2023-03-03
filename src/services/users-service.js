import API, {BASE_URL} from './webapi-service';

var errorMessage = '';

export const getUsers = async () => {
  try{
    return await API.get(`${BASE_URL}/users`).then( 
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

export const getUserById = async (props) => {
  try{
    return await API.get(`${BASE_URL}/users?id=${props.userId}`).then( 
      response => {
        if(response.data == null || response.data == undefined || response.data.length == 0){
          console.log('User not found');
          return { success: false, data: 'NotFound' };
        }

        return { success: true, data: response.data[0] };
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

export const getUserByEmail = async (props) => {
  try{
    return await API.get(`${BASE_URL}/users?email=${props.userEmail}`).then( 
      response => {
        if(response.data == null || response.data == undefined || response.data.length == 0){
          console.log('User not found');
          return { success: false, data: 'NotFound' };
        }

        return { success: true, data: response.data[0] };
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

export const deleteUser = async (props) => {
  try{
      return await API.delete(`${BASE_URL}/users/${props.id}`).then(
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

export const updateUser = async (params) => {
  let dataUserUpdated = {};
  dataUserUpdated.id = params.id;
  dataUserUpdated.name = params.name;
  dataUserUpdated.email = params.email;

  let validation = await validateUpdate(params);

  if(!validation.success)
    return { success: validation.success, data: validation.errorMessage};

  if(params.password.length >= 6){
    dataUserUpdated.password = params.password;
  }

  try{
      return await API.patch(`${BASE_URL}/users/${params.id}`, dataUserUpdated).then(
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

const validateGeneral = async (user) => {
  if(user.email.length == 0)
    return {success: false, errorMessage: 'Insira o email'};

  let existingUser = await getUserByEmail({userEmail: user.email});
  if(existingUser.data != 'NotFound' && existingUser.data.id != user.id)
    return {success:false, errorMessage: 'Email já está sendo utilizado por outro usuário'}

  if(user.password.length == 0)
    return {success: false, errorMessage: 'Insira a senha'};

  if(user.password.length < 6)
    return {success: false, errorMessage: 'Senha deve ter ao menos 6 caracteres'};

  if(user.password != user.passwordConfirm)
    return {success: false, errorMessage: 'Senhas não coincidem'};

  var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;
  var emailRegexTest = emailRegex.test(user.email);
  if(!emailRegexTest)
    return {success: false, errorMessage: 'Formato de email inválido'};

  return {success: true, errorMessage: ''};
}

const validateUpdate = async (user) => {
  let resultValidationGeneral = await validateGeneral(user);
  if(!resultValidationGeneral.success)
    return {success: resultValidationGeneral.success, errorMessage: resultValidationGeneral.errorMessage}

  return {success: true, errorMessage: ''};
}

export const validateRegister = async (user) => {
  let resultValidationGeneral = await validateGeneral(user);
  if(!resultValidationGeneral.success)
    return {success: resultValidationGeneral.success, errorMessage: resultValidationGeneral.errorMessage}

  if(user.email != user.emailConfirm)
    return {success: false, errorMessage: 'Emails não coincidem'};

  return {success: true, errorMessage: ''};
}