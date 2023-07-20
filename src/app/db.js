import postgres from 'postgres';

    const connectionString = 'postgresql://postgres:r5SxQ1FlXZ0JQCgs@db.ldthupuljagkosptqoku.supabase.co:5432/postgres'
    const sql = postgres(connectionString)

export default sql