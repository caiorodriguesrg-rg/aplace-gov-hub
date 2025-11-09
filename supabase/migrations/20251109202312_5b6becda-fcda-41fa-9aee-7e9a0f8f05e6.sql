-- Add status column to demonstration_requests for kanban CRM workflow
ALTER TABLE public.demonstration_requests 
ADD COLUMN status text NOT NULL DEFAULT 'new';

-- Add check constraint for valid statuses
ALTER TABLE public.demonstration_requests
ADD CONSTRAINT demonstration_requests_status_check 
CHECK (status IN ('new', 'contacted', 'negotiating', 'closed', 'lost'));

-- Create index for better performance on status queries
CREATE INDEX idx_demonstration_requests_status 
ON public.demonstration_requests(status);

-- Add policy for admins to view demonstration requests
CREATE POLICY "Admins can view all demonstration requests"
ON public.demonstration_requests
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Add policy for admins to update demonstration requests
CREATE POLICY "Admins can update demonstration requests"
ON public.demonstration_requests
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));