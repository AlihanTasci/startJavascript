import fs from "fs";

class UsersRepository {
    console.log(this);
  constructor(filename) {
    if (!filename) {
      throw new Error("Creating a repository requires a filename");
    }
    this.filename = filename;
    try {
      fs.accessSync(this.filename);
    } catch (err) {
      fs.writeFileSync(this.filename, "[]");
    }
  }

  async getAll() {
    const content = await fs.promises.readFile(this.filename);
  }
}

const repo = new UsersRepository("users.json");
