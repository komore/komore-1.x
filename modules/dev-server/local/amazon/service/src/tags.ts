import { Observable } from "rxjs";
import { Tag } from "./tag";

type TagMap = Record<string, ReadonlyArray<Tag>>;

/**
 * Adds tags for an ARN
 * @param tags 
 */
export function addTags(resourceArn: string, tags: ReadonlyArray<Tag>): Observable<ReadonlyArray<Tag>> {
  
}

export function removeTags(resourceArn: string, tagNames: ReadonlyArray<string>): Observable<ReadonlyArray<Tag>> {

}

export function clearTags(resourceArn: string): Observable<void> {
  return loadTags().pipe(
    
  );
}

export function getTags(resourceArn: string): Observable<ReadonlyArray<Tag>> {
    
}


function loadTags(): Observable<TagMap> {
  const path = path.join()
}

function saveTags(tags: TagMap): Observable<never> {
  
}

function updateTags(resourceArn: string)
