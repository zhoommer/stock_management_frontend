import axiosClient from "../axiosInstance";
import type { Initialize, Login } from "./types";

export class AuthenticationClient {
  private client = axiosClient;

  async login(data: { username: string; password: string }): Promise<Login> {
    const response = await this.client.post<Login>("/auth/signin", data);
    if (response.data) {
      localStorage.setItem("token", response.data.access_token);
    }
    return response.data;
  }

  async intialize(): Promise<Initialize> {
    const response = await this.client.get<Initialize>("/initialize");
    return response.data;
  }
}
