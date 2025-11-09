-- Insert admin role for adm@apicetecnologias.com.br
-- This inserts the admin role for the user with the specified email
INSERT INTO public.user_roles (user_id, role)
SELECT id, 'admin'::app_role
FROM public.profiles
WHERE email = 'adm@apicetecnologias.com.br'
ON CONFLICT (user_id, role) DO NOTHING;