import { decodeJwt } from ".";

type TJwt = {
  iss: string;
  iat: number;
  exp: number;
  aud: string;
  sub: string;
  name: string;
  email: string;
};

describe("JWT utils", () => {
  it("returns decoded jwt data", () => {
    const decodedJwt = decodeJwt<TJwt>(
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJFbnRlcnRhaW5tZW50IEFwcCIsImlhdCI6MTY2NDc0MzE3MCwiZXhwIjoxNjk2Mjc5MTcwLCJhdWQiOiJ3d3cuZXhhbXBsZS5jb20iLCJzdWIiOiJ0ZXN0QGV4YW1wbGUuY29tIiwibmFtZSI6IlRlc3QiLCJlbWFpbCI6InRlc3RAZXhhbXBsZS5jb20ifQ.RnnMEaEw9SSs6ofStUdivzHTu1JcYO8emgo28htk7Xo"
    );

    expect(decodedJwt).toEqual({
      iss: "Entertainment App",
      iat: 1664743170,
      exp: 1696279170,
      aud: "www.example.com",
      sub: "test@example.com",
      name: "Test",
      email: "test@example.com",
    });
  });
});
