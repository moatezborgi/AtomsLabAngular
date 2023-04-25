import { Injectable } from '@angular/core';
import { Client } from '@stomp/stompjs';
import {Observable} from 'rxjs';

export type Message = {
  type: string,
  message: string,
  from: string,
  to: string
};
@Injectable({
  providedIn: 'root'
})
export class WebSocketServiceService {
  constructor(private client: Client) { }
  private receiveMessage(body: string): Message {
    const message = JSON.parse(body) as Message;
    return message;
  }
  public connect(): Observable<Message> {


    return new Observable(observer => {
      this.client.onConnect = () => {
        this.client.subscribe('/topic/response', message => {
           observer.next(this.receiveMessage(message.body));


        });
      };
      this.client.activate();
    });
  }

  public sendMessage(message: any): void {
    if (this.client && this.client.connected) {
      this.client.publish({destination: '/app/message', body:JSON.stringify(message)});
    } else {
      console.error('WebSocket not connected');
    }
  }

}
