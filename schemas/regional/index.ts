import { SchemaStub } from 'schemas/types';
import IndianSchemas from './in';
import AustralianSchemas from './au';

/**
 * Regional Schemas are exported by country code.
 */
export default {
    au: AustralianSchemas,
    in: IndianSchemas,
} as Record<string, SchemaStub[]>;
