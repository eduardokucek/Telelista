import { z } from "zod";
import {
  contactSchema,
  contactSchemaRequest,
  contactSchemaResponse,
  contactsSchemaResponse,
} from "../schemas/contacts.schema";
import { DeepPartial } from "typeorm";

type TContact = z.infer<typeof contactSchema>;
type TContactRequest = z.infer<typeof contactSchemaRequest>;
type TContactResponse = z.infer<typeof contactSchemaResponse>;
type TContactsResponse = z.infer<typeof contactsSchemaResponse>;
type TContactUpdate = DeepPartial<TContactRequest>;

export {
  TContact,
  TContactRequest,
  TContactResponse,
  TContactsResponse,
  TContactUpdate,
};
