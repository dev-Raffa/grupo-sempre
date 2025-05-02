"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

export default function RedirectPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };

  if (!mounted) return null;

  return (
    <div className="relative flex h-[100dvh] w-full flex-col overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Background pattern - health related */}
      <div className="relative flex h-full w-full flex-col justify-center ">
        <header className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src="/images/grupo-sempre-logo.png"
              alt="Logo Grupo Sempre"
              width={340}
              height={140}
              priority
            />
          </motion.div>
        </header>

        <main className="flex flex-1 flex-col items-center justify-center">
          <motion.section
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mb-3 text-center sm:mb-4"
          >
            <h1 className="mb-1 text-xl font-bold tracking-tight text-[#2D4B9B] sm:text-2xl md:text-3xl">
              Cuidando da sua saúde e bem-estar
            </h1>
            <p className="mx-auto max-w-2xl text-sm text-gray-600 sm:text-base">
              Escolha o cuidado especializado que você e sua família merecem
            </p>
          </motion.section>

          <motion.section
            variants={container}
            initial="hidden"
            animate="show"
            className="grid w-full max-w-3xl gap-3 sm:grid-cols-2 sm:gap-4"
            aria-label="Opções de clínicas"
          >
            <motion.article variants={item} className="flex">
              <Link
                href="https://clinicassempresorrindo.com.br/"
                target="_blank"
                className="group relative flex h-full w-full flex-col overflow-hidden rounded-xl bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                aria-labelledby="sempre-sorrindo-heading"
              >
                <div
                  className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-300"
                  aria-hidden="true"
                />
                <div className="flex flex-1 flex-col p-3 sm:p-4">
                  <figure
                    className="mb-2 flex relative items-center justify-center rounded-lg bg-gray-50 p-2 px-2 sm:px-4"
                    style={{ height: "150px" }}
                  >
                    <Image
                      src="/images/sempre-sorrindo-logo.png"
                      alt="Logo Sempre Sorrindo"
                      fill
                      className="transition-transform duration-300 group-hover:scale-105"
                      priority
                    />
                  </figure>
                  <section className="mb-2 text-center sm:mb-3">
                    <h2
                      id="sempre-sorrindo-heading"
                      className="mb-1 text-lg font-bold text-gray-900 sm:text-xl"
                    >
                      Sempre Sorrindo
                    </h2>
                    <p className="text-xs text-gray-600 sm:text-sm">
                      Clínicas odontológicas com atendimento de excelência para
                      toda a família.
                    </p>
                  </section>
                  <div className="mt-auto">
                    <Button
                      className="group relative w-full overflow-hidden bg-[#2D4B9B] py-1 text-sm text-white hover:bg-[#1e3978] sm:py-2"
                      aria-label="Visitar o site da Sempre Sorrindo"
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        Visitar
                        <ArrowRight className="ml-1 h-3 w-3 transition-transform duration-300 group-hover:translate-x-1 sm:h-4 sm:w-4" />
                      </span>
                      <span
                        className="absolute bottom-0 left-0 h-full w-0 bg-[#1a2a57] transition-all duration-300 group-hover:w-full"
                        aria-hidden="true"
                      ></span>
                    </Button>
                  </div>
                </div>
              </Link>
            </motion.article>

            <motion.article variants={item} className="flex">
              <Link
                href="https://semprevisao.com.br/"
                target="_blank"
                className="group relative flex h-full w-full flex-col overflow-hidden rounded-xl bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                aria-labelledby="sempre-visao-heading"
              >
                <div
                  className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#2D4B9B] to-[#4A6FD4]"
                  aria-hidden="true"
                />
                <div className="flex flex-1 flex-col p-3 sm:p-4">
                  <figure
                    className="mb-2 flex relative items-center justify-center rounded-lg bg-gray-50 p-2 sm:p-2"
                    style={{ height: "150px" }}
                  >
                    <Image
                      src="/images/sempre-visao-logo.png"
                      alt="Logo Sempre Sorrindo"
                      fill
                      className="h-auto max-h-full w-auto transition-transform duration-300 group-hover:scale-105"
                      priority
                    />
                  </figure>
                  <section className="mb-2 text-center sm:mb-3">
                    <h2
                      id="sempre-visao-heading"
                      className="mb-1 text-lg font-bold text-gray-900 sm:text-xl"
                    >
                      Sempre Visão
                    </h2>
                    <p className="text-xs text-gray-600 sm:text-sm">
                      Clínicas oftalmológicas com tecnologia avançada e
                      profissionais especializados.
                    </p>
                  </section>
                  <div className="mt-auto">
                    <Button
                      className="group relative w-full overflow-hidden bg-[#2D4B9B] py-1 text-sm text-white hover:bg-[#1e3978] sm:py-2"
                      aria-label="Visitar o site da Sempre Visão"
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        Visitar
                        <ArrowRight className="ml-1 h-3 w-3 transition-transform duration-300 group-hover:translate-x-1 sm:h-4 sm:w-4" />
                      </span>
                      <span
                        className="absolute bottom-0 left-0 h-full w-0 bg-[#1a2a57] transition-all duration-300 group-hover:w-full"
                        aria-hidden="true"
                      ></span>
                    </Button>
                  </div>
                </div>
              </Link>
            </motion.article>
          </motion.section>
        </main>

        <footer className="flex justify-center pb-1 pt-2 sm:pb-2">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="text-center text-xs text-gray-500"
          >
            © {new Date().getFullYear()} Grupo Sempre. Todos os direitos
            reservados.
          </motion.p>
        </footer>
      </div>
    </div>
  );
}
