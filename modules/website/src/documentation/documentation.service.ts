import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * Documentation service
 */
@Injectable({
  providedIn: 'root'
})
export class DocumentationService {
  /**
   * Class constructor
   * @param httpClient HTTP client
   */
  constructor(private readonly httpClient: HttpClient) {}

  /**
   * Loads content
   * @param contentPath Content path
   * @returns Loaded content
   */
  loadContent(contentPath: string): Observable<string> {
    return this.httpClient.get(`/assets/content/${contentPath}.md`, { responseType: 'text'});
  }
}
