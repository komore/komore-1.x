
//class WorkerSubject

const worker = new Worker('abcd', undefined);

class WorkerSubject extends Subject {
  private readonly worker: Worker;
  private readonly owned: boolean;

  constructor(worker: Worker);
  constructor(url: string | URL, options?: WorkerOptions);
  constructor(urlOrWorker: string | URL | Worker, options?: WorkerOptions) {
    super();
    if (urlOrWorker instanceof Worker) {
      this.worker = urlOrWorker;
      this.owned = false;
    } else {
      this.worker = new Worker(urlOrWorker, options);
      this.owned = true;
    }
  }
}