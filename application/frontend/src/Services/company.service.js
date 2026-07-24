import api from "./api";

export async function createCompany(companyData) {
  const response = await api.post("/company", companyData);

  return response.data;
}

export async function getCompany() {
  const response = await api.get("/company");

  return response.data;
}

export async function getMe() {
  const response = await api.get("/auth/me");
  return response.data;
}