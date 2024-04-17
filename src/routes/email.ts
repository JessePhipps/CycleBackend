import { Elysia } from 'elysia';
import initEmailController from '../controllers/emailController';
//api endpoint for route suggestions

export default() =>
{ 
  // initialze email controller
  const emailController = initEmailController();

  // define route for email 
  return new Elysia({ prefix: '/email'})
        // use sendmail 
        .post('/', emailController.sendSuggestion)
        
}







