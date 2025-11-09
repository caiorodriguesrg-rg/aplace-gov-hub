-- Criar tabela para solicitações de demonstração
CREATE TABLE public.demonstration_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  organization TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Habilitar Row Level Security
ALTER TABLE public.demonstration_requests ENABLE ROW LEVEL SECURITY;

-- Política para permitir inserção pública (qualquer pessoa pode solicitar demonstração)
CREATE POLICY "Qualquer pessoa pode solicitar demonstração" 
ON public.demonstration_requests 
FOR INSERT 
WITH CHECK (true);

-- Política para permitir que apenas administradores autenticados vejam as solicitações
-- (você pode ajustar isso conforme suas necessidades)
CREATE POLICY "Apenas administradores podem ver solicitações" 
ON public.demonstration_requests 
FOR SELECT 
USING (false); -- Por padrão, ninguém pode ver. Você precisará criar um sistema de roles para administradores

-- Função para atualizar timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Trigger para atualização automática de timestamps
CREATE TRIGGER update_demonstration_requests_updated_at
BEFORE UPDATE ON public.demonstration_requests
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Adicionar índice para melhor performance em buscas por email
CREATE INDEX idx_demonstration_requests_email ON public.demonstration_requests(email);
CREATE INDEX idx_demonstration_requests_created_at ON public.demonstration_requests(created_at DESC);