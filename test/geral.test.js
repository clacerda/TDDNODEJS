let app = require("../src/app");
let supertest = require("supertest");
let request = supertest(app);

test("A aplicação deve responder na porta 8080", async () => {
        return request.get("/").then(res => expect(res.statusCode).toEqual(200));  

        // Exemplo de uso com async await
        // let res = await request.get("/"); 
        
        // expect(res.statusCode).toEqual(200);  
});


test("Deve retornar vermelho como cor favorita", () => {
   return  request.get("/cor/teste").then(res => {
    expect(res.statusCode == 200)
    expect(res.body.cor).toBe("vermelho") 
    expect(res.body.color).toEqual("red")
   });
});