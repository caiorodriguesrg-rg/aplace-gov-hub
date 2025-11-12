import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ArrowRight, Download } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const demonstrationSchema = z.object({
  name: z.string().trim().min(1, "Nome é obrigatório").max(100, "Nome deve ter no máximo 100 caracteres"),
  organization: z.string().trim().min(1, "Órgão é obrigatório").max(200, "Nome do órgão deve ter no máximo 200 caracteres"),
  email: z.string().trim().email("Email inválido").max(255, "Email deve ter no máximo 255 caracteres"),
  phone: z.string().trim().min(1, "Telefone é obrigatório").max(20, "Telefone deve ter no máximo 20 caracteres"),
});

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Validar dados com zod
      const validatedData = demonstrationSchema.parse(formData);

      // Salvar no Supabase
      const { error } = await supabase
        .from('demonstration_requests')
        .insert({
          name: validatedData.name,
          organization: validatedData.organization,
          email: validatedData.email,
          phone: validatedData.phone,
        });

      if (error) throw error;

      toast.success("Solicitação enviada com sucesso! Entraremos em contato em breve.");
      
      // Limpar formulário
      setFormData({
        name: "",
        organization: "",
        email: "",
        phone: "",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Mostrar erros de validação
        error.errors.forEach((err) => {
          toast.error(err.message);
        });
      } else {
        console.error('Erro ao enviar solicitação:', error);
        toast.error("Erro ao enviar solicitação. Por favor, tente novamente.");
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDownloadPresentation = async () => {
    try {
      // Obter URL pública do arquivo no Storage
      const { data } = supabase.storage
        .from('documents')
        .getPublicUrl('apresentacao-aplace.pdf');
      
      if (!data.publicUrl) {
        throw new Error('Não foi possível obter a URL do arquivo');
      }
      
      // Criar link temporário e acionar download
      const link = document.createElement('a');
      link.href = data.publicUrl;
      link.download = 'Apresentacao-APlace.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast.success("Download iniciado!");
    } catch (error) {
      console.error('Erro ao baixar apresentação:', error);
      toast.error("Erro ao baixar apresentação. Tente novamente.");
    }
  };

  return (
    <section id="contato" className="py-16 sm:py-24 gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 animate-fade-in text-white">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Modernize as Compras do Seu Órgão Público
            </h2>
            <p className="text-xl text-white/90">
              Junte-se à nova era das compras públicas brasileiras
            </p>
          </div>

          <Card className="p-8 sm:p-10 lg:p-12 animate-scale-in shadow-2xl border-2 border-white/10 backdrop-blur-sm bg-white/95">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    Nome Completo *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <label htmlFor="organization" className="block text-sm font-semibold mb-2">
                    Órgão Público *
                  </label>
                  <Input
                    id="organization"
                    name="organization"
                    type="text"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="Nome do órgão"
                    required
                    className="h-12"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    E-mail Corporativo *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                    Telefone *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(00) 00000-0000"
                    required
                    className="h-12"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  type="submit"
                  variant="accent"
                  size="lg"
                  className="flex-1 group"
                >
                  Solicitar Demonstração
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  className="flex-1"
                  onClick={handleDownloadPresentation}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Baixar Apresentação
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
