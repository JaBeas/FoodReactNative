import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 3cZbWoE_OxChIIIotaOk4Krvb1Tg_s4TipvEou8vSDNP3AbKt3LJKy-Uc8bzUBNL9Z6FWeExfmYGxVjoYQLHpLUcWdXHzo8p3GjdJOHam_QI3aOE7dxZFgU2PCMMYXYx",
  },
});
