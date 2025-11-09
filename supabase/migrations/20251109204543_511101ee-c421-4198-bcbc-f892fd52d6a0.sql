-- Etapa 1: Corrigir políticas RLS da tabela user_roles para evitar recursão circular

-- Remover políticas problemáticas existentes
DROP POLICY IF EXISTS "Users can view their own roles" ON user_roles;
DROP POLICY IF EXISTS "Admins can view all roles" ON user_roles;

-- Criar política simples para usuários autenticados lerem suas próprias roles
-- Isso evita recursão ao não usar has_role() na verificação
CREATE POLICY "Enable read access for authenticated users to own roles"
ON user_roles FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

-- Recriar política para admins visualizarem todas as roles usando has_role
CREATE POLICY "Admins can view all user roles"
ON user_roles FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));