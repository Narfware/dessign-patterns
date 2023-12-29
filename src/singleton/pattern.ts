export class Singleton {
  private static instance: Singleton
  public static getInstance (): Singleton {
    if (Singleton.instance != null) return Singleton.instance

    Singleton.instance = new Singleton()

    return Singleton.instance
  }
}
