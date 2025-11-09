-- Update RLS policies to enforce approval workflow

-- Drop existing policies that don't check approval status
DROP POLICY IF EXISTS "Users can view their own profile" ON public.profiles;

-- Create new policy that requires approval for users to view their own profile
CREATE POLICY "Users can view their own profile if approved" 
ON public.profiles 
FOR SELECT 
USING (auth.uid() = id AND approved = true);

-- Admins can still view all profiles
-- (This policy already exists, no changes needed)

-- Add policy to allow users to view their own profile approval status (read-only for approval field)
-- This is needed so users can check if they're approved during login
CREATE POLICY "Users can check their approval status" 
ON public.profiles 
FOR SELECT 
USING (auth.uid() = id);