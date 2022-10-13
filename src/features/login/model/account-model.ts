export type AccountModel = {
  auth_ticket: string;
  full_name: string;
  session: SessionModel;
  success: boolean;
  user_id: string;
};
type SessionModel = {
  change_password: boolean;
  id: string;
  user_id: string;
  username: string;
};
