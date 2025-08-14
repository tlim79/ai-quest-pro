-- Fix security vulnerability: Restrict todo access to only the owner
-- Drop existing overly permissive policies
DROP POLICY IF EXISTS "Authenticated users can delete any todo" ON public.todos;
DROP POLICY IF EXISTS "Authenticated users can read todos" ON public.todos;
DROP POLICY IF EXISTS "Authenticated users can update any todo (collaboration)" ON public.todos;

-- Create secure policies that only allow access to user's own todos
CREATE POLICY "Users can view their own todos" 
ON public.todos 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own todos" 
ON public.todos 
FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own todos" 
ON public.todos 
FOR DELETE 
USING (auth.uid() = user_id);

-- Note: The INSERT policy "Users can insert their own todos" is already secure and will remain unchanged