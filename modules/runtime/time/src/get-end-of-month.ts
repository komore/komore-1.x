import { LocalDate } from './local-date';

export function getEndOfMonth(localDate: LocalDate): LocalDate;
export function getEndOfMonth(localDateTime: LocalDateTime): LocalDateTime;
export function getEndOfMonth(offsetDateTime: OffsetDateTime): OffsetDateTime;

function getEndOfMonth(date: LocalDate | LocalDateTime | OffsetDateTime): LocalDate | LocalDateTime | OffsetDateTime {

}
