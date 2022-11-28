type ApiResponse<T> = Promise<
  | {
      ok: true;
      data: T;
    }
  | {
      ok: false;
      error: string;
    }
>;

type LoginOptions = {
  email: string;
  password: string;
};

type LoginData = {
  avatar: string;
  name: string;
};

export function login({
  email,
  password,
}: LoginOptions): ApiResponse<LoginData> {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (email === "elon@mercdev.com" && password === "twitter") {
        resolve({ ok: true, data: { avatar: "/avatar.jpeg", name: "Elon" } });
      } else {
        resolve({ ok: false, error: "Incorrect email or password" });
      }
    }, 1000);
  });
}
