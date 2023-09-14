export interface ISessionType {
  guest_session_id: string;
  expires_at: string;
}

export interface GuestSessionType {
  guestSession: {
    results: ISessionType
  }
}
