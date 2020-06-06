interface Env {
  env: string;
}

const envs: { dev: Env; prod: Env } = {
  dev: { env: "dev-0cpve" },
  prod: { env: "product-e2f515" }
};

console.log(process.env.NODE_ENV);

export default process.env.NODE_ENV === "production" ? envs.prod : envs.dev;
