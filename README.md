# NodeApiWithJWT
Node Api with Json Web Token
Used JsonwebToken js 
Just npm i and node index.js to start the application.
Use postman and hit http://localhost:3000/api/login
This will generate token.
Then hit http://localhost:3000/api/protected with header Authorization and value Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNTExNTEzOTc1fQ.pm4wOin1nSfCf8lrXb4Y0CIZJfqP13g7eVZ-ZGJI5qw
The token value given here will not be the same when you hit login route. So just change this token value with the one you generates.
If you hit http://localhost:3000/api/protected without header then it will give error response.
Once you hit http://localhost:3000/api/protected with header and correct token value, it will give the response.
