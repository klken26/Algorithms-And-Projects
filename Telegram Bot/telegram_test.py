from telegram.ext import Updater, CommandHandler, MessageHandler,  Filters, InlineQueryHandler, Job, JobQueue




def sayhi(bot, job):
    job.context.message.reply_text("hi")


def time(bot, update,job_queue):
    job = job_queue.run_repeating(sayhi, 5, context=update)


def main():
    updater = Updater("1696868255:AAGWEMo33BaU9JIJYdtqrucpHEkLvRZngRg")
    dp = updater.dispatcher
    job_queue = JobQueue()
    dispatcher = updater.dispatcher
    job_queue.set_dispatcher(dispatcher)
    job_queue.run_repeating(callback=sayhi, interval=5)
    dp.add_handler(MessageHandler(Filters.text, time ,pass_job_queue=True))
    Updater.start_polling()
    job_queue.start()


    updater.start_polling()
    updater.idle()


if __name__ == '__main__':
    main()

