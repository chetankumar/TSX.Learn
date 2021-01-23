using System;

namespace TSX.Learn.NetCore
{
    class Program
    {
        static void Main(string[] args)
        {
            string taskName = args[0];
            switch (taskName)
            {
                case "AsyncAwaitEx1":
                    new AsyncAwaitEx1().Run();
                    break;
                case "AsyncAwaitEx2":
                    new AsyncAwaitEx2().Run();
                    break;
                case "AsyncAwaitEx3":
                    new AsyncAwaitEx3().Run();
                    break;
                case "AsyncAwaitEx4":
                    new AsyncAwaitEx4().Run();
                    break;
                case "AsyncAwaitEx5":
                    new AsyncAwaitEx5().Run();
                    break;
                case "AsyncAwaitEx6":
                    var task6 = new AsyncAwaitEx6().Run();
                    task6.Wait();
                    break;
                case "AsyncAwaitEx7":
                    var task7 = new AsyncAwaitEx7().Run();
                    task7.Wait();
                    break;
            }
            Console.WriteLine("Finished!");
            Console.Read();
        }
    }
}
