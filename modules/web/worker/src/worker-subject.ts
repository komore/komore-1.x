import { CompletionObserver, NextObserver, Observable } from 'rxjs';

const worker = new Worker('abcd', undefined);

class WorkerSubject<OutboundMessageType, InboundMessageType = OutboundMessageType>
  extends Observable<InboundMessageType>
  implements NextObserver<OutboundMessageType>, CompletionObserver<OutboundMessageType> {
  private readonly worker: Worker;
  private readonly owned: boolean;

  constructor(worker: Worker);
  constructor(url: string | URL, options?: WorkerOptions & Partial<WorkerSubjectOptions>);
  constructor(urlOrWorker: string | URL | Worker, options?: WorkerOptions & Partial<WorkerSubjectOptions>) {
    super(observer => {
      
    });

    if (urlOrWorker instanceof Worker) {
      this.worker = urlOrWorker;
      this.owned = false;
    } else {
      this.worker = new Worker(urlOrWorker, options);
      this.owned = true;
    }
  }

  next(value: OutboundMessageType) {
    this.worker.postMessage(value, )
  }

  complete(): void {}
}
